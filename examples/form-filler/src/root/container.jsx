import * as React from 'react';
import { Collapse } from 'react-collapse';
import classNames from 'classnames';
import { SkjemautfyllerContainer } from '@helsenorge/skjemautfyller/components';
import { getSidebarSections } from '@helsenorge/skjemautfyller/util/extension';

const getResources = (language) => {
    if (language === 'en-GB') {
        return {
            deleteButtonText: 'Delete',
            validationSummaryHeader: 'Check that the following are filled in correctly:',
            validationFileMax: 'File size must be less than 25MB',
            validationFileType: 'The file type must be jpeg, png, or pdf',
            supportedFileFormats: 'Valid file formats are jpeg, png and pdf',
            selectDefaultPlaceholder: 'Select one of the options.',
            resetTime: 'Reset time',
            errorAfterMaxDate: 'Date cannot be after maximum date',
            errorBeforeMinDate: 'Date cannot be before minimum date',
            dateRequired: 'Select date, or enter date as follows: dd.mm.yyyy.',
            oppgiTid: ' Enter time',
            ugyldigTid: 'Invalid time',
            ugyldigDatoTid: 'Invalid date and time',
            oppgiVerdi: 'Select one of the options.',
            oppgiGyldigVerdi: 'Please enter a valid value',
            formCancel: 'Cancel',
            formSend: 'Submit',
            formSave: 'Show QuestionnaireResponse',
            formError: 'Check that everything is filled in correctly.',
            formOptional: '(optional)',
            formRequired: '(required)',
            repeatButtonText: 'Add',
            avsluttSkjema: 'Discard changes',
            fortsett: 'Continue editing',
            confirmDeleteButtonText: 'Delete row',
            confirmDeleteCancelButtonText: 'Discard changes',
            confirmDeleteHeading: 'There are unsaved changes',
            confirmDeleteDescription: 'If you delete the row, your changes will be discarded.',
            minutePlaceholder: 'mm',
            hourPlaceholder: 'hh',
            ikkeBesvart: 'Not answered',
            uploadButtonText: 'Upload file',
            filterDateCalendarButton: 'Select date',
            filterDateNavigateBackward: 'Back',
            filterDateNavigateForward: 'Forward',
            filterDateErrorDateFormat: 'The date is entered in the wrong format',
            filterDateErrorBeforeMinDate: 'From date can not be earlier than before date',
            filterDateErrorAfterMaxDate: 'From date can not be later than to date',
            validationNotAllowed: 'is not allowed',
            formRequiredErrorMessage: 'This field is required',
            deleteAttachmentText: 'Delete',
            autoSuggestLoadError: 'Technical error',
            autosuggestNoSuggestions: 'No results found for "{0}". Try another word or check for spelling errors.',
            stringOverMaxLengthError: 'You have typed too many characters. Make the text shorter.',
            maxLengthText: 'Maximum {0} characters',
            chooseFilesText: 'Select files',
            skipLinkText: 'Go to navigator',
            clearDate: 'Remove date',
            calendarLabel: 'Calendar',
            closeDatePicker: 'Close',
            focusStartDate: 'Use the calendar and select a date',
            jumpToPrevMonth: 'Go backward to last month',
            jumpToNextMonth: 'Go forward to next month',
            keyboardShortcuts: 'Keyboard shortcuts',
            showKeyboardShortcutsPanel: 'Open the keyboard shortcuts panel',
            hideKeyboardShortcutsPanel: 'Close the keyboard shortcut panel',
            enterKey: 'Enter key',
            leftArrowRightArrow: 'Right and left arrow keys',
            upArrowDownArrow: 'Up and down arrow keys',
            pageUpPageDown: 'Page up and Page down key',
            homeEnd: 'Home and End key',
            escape: 'Escape key',
            questionMark: 'Question mark',
            openThisPanel: 'Open this panel',
            selectFocusedDate: 'Select the date that has focus',
            moveFocusByOneDay: 'Move one day backward (left) and forward (right)',
            moveFocusByOneWeek: 'Move one week backward (up) and forward (down)',
            moveFocusByOneMonth: 'Change month',
            moveFocustoStartAndEndOfWeek: 'Go to the first or last day of the week',
            returnFocusToInput: 'Return to the date in the input field',
            year_field_invalid: 'Enter a valid value for the year field',
            year_field_maxdate: 'The latest year you can choose is',
            year_field_mindate: 'The earliest year you can choose is',
            year_field_required: 'Year is required',
            yearmonth_field_invalid: 'Invalid value',
            yearmonth_field_invalid_year: 'You must enter a valid year',
            yearmonth_field_maxdate: 'The latest time you can choose is',
            yearmonth_field_mindate: 'The earliest time you can choose is',
            yearmonth_field_month_placeholder: 'Choose month',
            yearmonth_field_required: 'Year and month is required',
            yearmonth_field_year_placeholder: 'Choose year',
            adresseKomponent_header: 'Who is the recipient?',
            adresseKomponent_skjemaSendesTil: 'Questionnaire will be sent to:',
            adresseKomponent_sublabel: 'You must select recipient before submitting the questionnaire.',
            adresseKomponent_velgAvdeling: 'Select department',
            adresseKomponent_velgHelseforetak: 'Select health company',
            adresseKomponent_velgHelseregion: 'Select health region',
            adresseKomponent_velgSykehus: 'Select hospital',
            adresseKomponent_velgKlinikk: 'Select clinic',
            adresseKomponent_velgSeksjon: 'Select section',
            adresseKomponent_velgSengepost: 'Select bed post',
            adresseKomponent_velgPoliklinikk: 'Select polyclinic',
            adresseKomponent_velgTjeneste: 'Select place of treatment',
            adresseKomponent_feilmelding: 'You must select a recipient.',
            adresseKomponent_loadError: 'Technical error. Could not load recipients.',
        };
    }
    if (language === 'fr-FR') {
        return {
            deleteButtonText: 'Supprimer',
            validationSummaryHeader: 'V??rifiez que les ??l??ments suivants sont bien remplis:',
            validationFileMax: 'La taille des fichiers doit ??tre inf??rieure ?? 25MB',
            validationFileType: 'Le type de fichier doit ??tre jpeg, png, or pdf',
            supportedFileFormats: 'Les formats de fichier valides sont jpeg, png and pdf',
            selectDefaultPlaceholder: 'S??lectionnez une des options.',
            resetTime: 'Temps de r??initialisation',
            errorAfterMaxDate: 'La date ne peut pas ??tre apr??s la date maximum',
            errorBeforeMinDate: 'La date ne peut pas ??tre avant la date minimum',
            dateRequired: 'S??lectionnez une date, ou entrez la date comme suit: jj.mm.aaaa.',
            oppgiTid: " Entrez l'heure",
            ugyldigTid: 'Heure invalide',
            ugyldigDatoTid: 'Date et heure invalides',
            oppgiVerdi: 'S??lectionnez une des options.',
            oppgiGyldigVerdi: 'Merci de entrer une valeur valide',
            formCancel: 'Annuler',
            formSend: 'Valider',
            formSave: 'Afficher QuestionnaireResponse',
            formError: 'V??rifiez que tout soit rempli correctement.',
            formOptional: '(optionnel)',
            formRequired: '(requis)',
            repeatButtonText: 'Ajouter',
            avsluttSkjema: 'Annuler les modifications',
            fortsett: "Continuer l'??dition",
            confirmDeleteButtonText: 'Supprimer la ligne',
            confirmDeleteCancelButtonText: 'Annuler les modifications',
            confirmDeleteHeading: 'Il y a des modifications non sauvegard??es',
            confirmDeleteDescription: 'Si vous supprimez la ligne, vos modifications seront annu??les.',
            minutePlaceholder: 'mm',
            hourPlaceholder: 'hh',
            ikkeBesvart: 'Non r??pondu',
            uploadButtonText: 'Charger un fichier',
            filterDateCalendarButton: 'S??lectionner une date',
            filterDateNavigateBackward: 'Pr??c??dent',
            filterDateNavigateForward: 'Suivant',
            filterDateErrorDateFormat: 'Le format de la date est incorrect',
            filterDateErrorBeforeMinDate: 'La date ne peut pas ??tre une date situ??e avant la date minimale',
            filterDateErrorAfterMaxDate: 'La date ne peut pas ??tre une date situ??e apr??s la date maximale',
            validationNotAllowed: "n'est pas permis",
            formRequiredErrorMessage: 'Ce champ est requis',
            deleteAttachmentText: 'Supprimer',
            autoSuggestLoadError: 'Erreur technique',
            autosuggestNoSuggestions: 'Pas de r??sultat pour "{0}". Essayez un autre mot ou v??rifiez son orthographe.',
            stringOverMaxLengthError: 'Vous avez entr?? trop de caract??res. R??duisez le texte.',
            maxLengthText: 'Maximum {0} caract??res',
            chooseFilesText: 'Selectionnez les fichiers',
            skipLinkText: 'Allez au navigateur',
            clearDate: 'Supprimer la date',
            calendarLabel: 'Calendrier',
            closeDatePicker: 'Fermer',
            focusStartDate: 'Utilisez le calendrier et s??lectionnez une date',
            jumpToPrevMonth: 'Aller au mois pr??c??dent',
            jumpToNextMonth: 'Aller au mois suivant',
            keyboardShortcuts: 'Raccourcis clavier',
            showKeyboardShortcutsPanel: 'Ouvrir le menu des raccourcis clavier',
            hideKeyboardShortcutsPanel: 'Fermer le menu des raccourcis clavier',
            enterKey: 'Entrez la touche',
            leftArrowRightArrow: 'Fl??ches gauche et droite',
            upArrowDownArrow: 'Fl??ches haut et bas',
            pageUpPageDown: 'Touches page haut/bas',
            homeEnd: 'Touche fin',
            escape: 'Touche ??chap',
            questionMark: "Point d'interrogation",
            openThisPanel: 'Ouvrir ce menu',
            selectFocusedDate: 'Selectionnez la date choisie',
            moveFocusByOneDay: "Reculer (gauche) ou avancer (droite) d'un jour",
            moveFocusByOneWeek: "Reculer (haut) ou avancer (bas) d'une semaine",
            moveFocusByOneMonth: 'Changer de mois',
            moveFocustoStartAndEndOfWeek: 'Aller au premier ou dernier jour de la semaine',
            returnFocusToInput: 'Retourner ?? la date saisie',
            year_field_invalid: "Entrez une valeur valide pour l'ann??e",
            year_field_maxdate: "Le dernier choix d'ann??e possible est",
            year_field_mindate: "Le premier choix d'ann??e possible est",
            year_field_required: "L'ann??e est requise",
            yearmonth_field_invalid: 'Valeur invalide',
            yearmonth_field_invalid_year: 'Vous devez entrer une ann??e valide',
            yearmonth_field_maxdate: 'La derni??re heure que vous pouvez choisir est',
            yearmonth_field_mindate: 'La premi??re heure que vous pouvez choisir est',
            yearmonth_field_month_placeholder: 'Choisissez le mois',
            yearmonth_field_required: "L'ann??e et le mois sont requis",
            yearmonth_field_year_placeholder: "Choisissez l'ann??e'",
            adresseKomponent_header: 'Qui est le destinataire ?',
            adresseKomponent_skjemaSendesTil: 'Le Questionnaire sera envoy?? ?? :',
            adresseKomponent_sublabel: "Vous devez s??lectionner un destinataire avant d'envoyer le questionnaire.",
            adresseKomponent_velgAvdeling: 'S??lectionnez le d??partement',
            adresseKomponent_velgHelseforetak: "S??lectionnez l'entreprise",
            adresseKomponent_velgHelseregion: 'S??lectionnez la r??gion',
            adresseKomponent_velgSykehus: "S??lectionnez l'hopital",
            adresseKomponent_velgKlinikk: 'S??lectionnez la clinique',
            adresseKomponent_velgSeksjon: 'S??lectionnez la section',
            adresseKomponent_velgSengepost: 'S??lectionnez le lit',
            adresseKomponent_velgPoliklinikk: 'S??lectionnez la polyclinique',
            adresseKomponent_velgTjeneste: 'S??lectionnez le lieu de soin',
            adresseKomponent_feilmelding: 'Vous devez s??lectionner un destinataire.',
            adresseKomponent_loadError: 'Erreur technique. Impossible de charger les destinataires.',
        };
    }
    return {
        deleteButtonText: 'Slett',
        validationSummaryHeader: 'Sjekk at f??lgende er riktig utfylt:',
        validationFileMax: 'Filst??rrelsen m?? v??re mindre enn 25MB',
        validationFileType: 'Filtypen m?? v??re jpeg, png, eller pdf',
        supportedFileFormats: 'Gyldige filformater er jpeg, png og pdf',
        selectDefaultPlaceholder: 'Velg...',
        resetTime: 'Nullstill tidspunkt',
        errorAfterMaxDate: 'Dato kan ikke v??re etter maksimum dato',
        errorBeforeMinDate: 'Dato kan ikke v??re f??r minimums dato',
        dateRequired: 'Oppgi en dato',
        oppgiTid: ' Oppgi tid',
        ugyldigTid: 'Ugyldig tid',
        oppgiDatoTid: 'oppgi dato og tid',
        ugyldigDatoTid: 'Ugyldig dato og tid',
        oppgiVerdi: 'Oppgi en verdi',
        oppgiGyldigVerdi: 'Oppgi en gyldig verdi',
        formCancel: 'Avbryt',
        formSend: 'Fullf??r',
        formSave: 'Vis QuestionnaireResponse',
        formError: 'Sjekk at alt er riktig utfylt.',
        formOptional: '(valgfritt)',
        formRequired: '(m?? fylles ut)',
        repeatButtonText: 'Legg til',
        avsluttSkjema: 'Avslutt skjema',
        fortsett: 'Fortsett',
        confirmDeleteButtonText: 'Forkast endringer',
        confirmDeleteCancelButtonText: 'Avbryt',
        confirmDeleteHeading: 'Det finnes endringer',
        confirmDeleteDescription: 'Hvis du sletter, vil du miste endringene.',
        minutePlaceholder: 'mm',
        hourPlaceholder: 'tt',
        ikkeBesvart: 'Ikke besvart',
        uploadButtonText: 'Last opp fil',
        filterDateCalendarButton: 'Velg dato',
        filterDateNavigateBackward: 'Tilbake',
        filterDateNavigateForward: 'Fram',
        filterDateErrorDateFormat: 'Datoen er oppgitt p?? feil format',
        filterDateErrorBeforeMinDate: 'Fra-dato kan ikke v??re senere enn til-dato',
        filterDateErrorAfterMaxDate: 'Fra-dato kan ikke v??re senere enn til-dato',
        validationNotAllowed: 'er ikke tillatt',
        formRequiredErrorMessage: 'Du m?? fylle ut dette feltet',
        deleteAttachmentText: 'Slett',
        autoSuggestLoadError: 'Teknisk feil',
        autosuggestNoSuggestions: 'Ingen treff p?? "{0}". Pr??v med et annet ord eller sjekk for skrivefeil.',
        stringOverMaxLengthError: 'Du har skrevet for mange tegn. Gj??r teksten kortere.',
        maxLengthText: 'Maksimum {0} tegn',
        chooseFilesText: 'Velg filer',
        skipLinkText: 'Hopp til navigator',
        clearDate: 'Fjern dato',
        calendarLabel: 'Kalender',
        closeDatePicker: 'Lukk',
        focusStartDate: 'Bruk kalenderen og velg dato.',
        jumpToPrevMonth: 'G?? bakover til forrige m??ned',
        jumpToNextMonth: 'G?? fremover til neste m??ned',
        keyboardShortcuts: 'Tastatursnarveier',
        showKeyboardShortcutsPanel: '??pne panelet med tastatursnarveier',
        hideKeyboardShortcutsPanel: 'Lukk panelet med tastatursnarveier',
        enterKey: 'Enter tast',
        leftArrowRightArrow: 'H??yre og venstre piltast',
        upArrowDownArrow: 'Opp og ned piltast',
        pageUpPageDown: 'Side opp og Side ned tast',
        homeEnd: 'Hjem og Slutt tast',
        escape: 'Escape tast',
        questionMark: 'Sp??rsm??lstegn',
        openThisPanel: '??pne dette panelet',
        selectFocusedDate: 'Velg datoen som har fokus',
        moveFocusByOneDay: 'Flytt en dag bakover (venstre) og fremover (h??yre)',
        moveFocusByOneWeek: 'Flytt en uke bakover (opp) og fremover (ned)',
        moveFocusByOneMonth: 'Skifte m??ned',
        moveFocustoStartAndEndOfWeek: 'G?? til f??rste eller siste dag av uken',
        returnFocusToInput: 'G?? tilbake til datoen i inputfeltet',
        year_field_invalid: 'Du m?? skrive inn et gyldig ??rstall',
        year_field_maxdate: '??rstall er etter det eldste tillatte ??r',
        year_field_mindate: '??rstall er f??r det minste tillatte ??r',
        year_field_required: '??rstall er p??krevd',
        yearmonth_field_invalid: 'Ugyldig verdi',
        yearmonth_field_invalid_year: 'Du m?? skrive inn et gyldig ??rstall',
        yearmonth_field_maxdate: 'Tidspunkt er etter eldste tillatte tidspunkt',
        yearmonth_field_mindate: 'Tidspunkt er f??r minste tillatte tidspunkt',
        yearmonth_field_month_placeholder: 'Velg m??ned',
        yearmonth_field_required: '??rstall og m??ned er p??krevd',
        yearmonth_field_year_placeholder: 'Velg ??r',
        adresseKomponent_header: 'Hvem er mottaker av skjemaet?',
        adresseKomponent_skjemaSendesTil: 'Skjemaet sendes til:',
        adresseKomponent_sublabel: 'Du m?? velge mottaker f??r du sender skjemaet.',
        adresseKomponent_velgAvdeling: 'Velg avdeling',
        adresseKomponent_velgHelseforetak: 'Velg helseforetak',
        adresseKomponent_velgHelseregion: 'Velg helseregion',
        adresseKomponent_velgSykehus: 'Velg sykehus',
        adresseKomponent_velgKlinikk: 'Velg klinikk',
        adresseKomponent_velgSeksjon: 'Velg seksjon',
        adresseKomponent_velgSengepost: 'Velg sengepost',
        adresseKomponent_velgPoliklinikk: 'Velg poliklinikk',
        adresseKomponent_velgTjeneste: 'Velg behandlingssted',
        adresseKomponent_feilmelding: 'Du m?? velge en mottaker',
        adresseKomponent_loadError: 'Teknisk feil: kunne ikke laste liste over mottakere',
    };
};

const getReceiverComponentTestData = (selectedReceiverEndpoint) => {
    return [
        {
            OrgenhetId: 1,
            Navn: 'Helse S??r-??st',
            EnhetType: 1,
            EndepunktId: null,
            UnderOrgenheter: [
                {
                    OrgenhetId: 11,
                    Navn: 'Ahus',
                    EnhetType: 2,
                    EndepunktId: 'TEST-AHUS',
                    UnderOrgenheter: null,
                },
            ],
        },
        {
            OrgenhetId: 2,
            Navn: 'Helse vest',
            EnhetType: 1,
            EndepunktId: null,
            UnderOrgenheter: [
                {
                    OrgenhetId: 22,
                    Navn: 'Haukeland sykehus',
                    EnhetType: 2,
                    EndepunktId: 'TEST-HAUKELAND',
                    UnderOrgenheter: null,
                },
            ],
        },
        ...(selectedReceiverEndpoint && [
            {
                OrgenhetId: 999,
                Navn: `Test receiver with endpoint = Endpoint/${selectedReceiverEndpoint}`,
                EnhetType: 5,
                EndepunktId: selectedReceiverEndpoint,
                UnderOrgenheter: null,
            },
        ]),
    ];
};

const generateSectionContent = (header, content) => {
    return content.length > 0 ? (
        <>
            <h2>{header}</h2>
            <div>
                {content.map((x, index) => (
                    <p
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: x,
                        }}
                    ></p>
                ))}
            </div>
        </>
    ) : null;
};

const getSidebarElements = (questionnaire) => {
    const sidebarData = getSidebarSections(questionnaire);

    const seksjonerFraSkjema = {
        'SOT-1': [],
        'SOT-2': [],
        'SOT-3': [],
    };

    sidebarData.forEach((x) => {
        if (x.item.code && x.item.code.length > 0 && x.item.code[0].code) {
            if (seksjonerFraSkjema[x.item.code[0].code]) {
                seksjonerFraSkjema[x.item.code[0].code].push(x.markdownText);
            }
        }
    });

    return seksjonerFraSkjema;
};

const Container = (props) => {
    const [responseJson, setResponseJson] = React.useState('');
    const [isSidebarViewEnabled, setIsSidebarViewEnabled] = React.useState(false);

    const questionnaire = JSON.parse(props.questionnaireString);
    const sidebarData = getSidebarElements(questionnaire);

    const resources = getResources(props.language);

    return (
        <div className="page_skjemautfyller">
            {responseJson && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        overflow: 'auto',
                        backgroundColor: '#fff',
                        zIndex: 100,
                    }}
                >
                    <div>QuestionnaireResponse basert p?? det som er krysset av:</div>
                    <p>{JSON.stringify(responseJson)}</p>
                    <button
                        onClick={() => {
                            setResponseJson('');
                        }}
                    >
                        Tilbake til skjemautfyller
                    </button>
                </div>
            )}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    padding: 8,
                    backgroundColor: '#fff',
                    zIndex: 90,
                    transition: 'transform .5s ease,-webkit-transform .5s ease',
                    width: '27.5rem',
                    borderLeft: '2px #AAA solid',
                    transform: isSidebarViewEnabled ? 'translateX(0)' : 'translateX(100%)',
                }}
            >
                <button
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '-38px',
                        padding: '0 9px',
                        fontSize: '32px',
                        backgroundColor: '#fff',
                        border: '2px #AAA solid',
                        borderRightWidth: 0,
                        cursor: 'pointer',
                    }}
                    onClick={() => setIsSidebarViewEnabled(!isSidebarViewEnabled)}
                >
                    ?
                </button>
                {isSidebarViewEnabled && (
                    <div
                        style={{
                            overflow: 'auto',
                            height: '100%',
                        }}
                    >
                        {generateSectionContent('Alternativer for utfylling', sidebarData['SOT-1'])}
                        {generateSectionContent('Veiledning og ansvarlig', sidebarData['SOT-2'])}
                        {generateSectionContent('Behandling hos mottaker', sidebarData['SOT-3'])}
                    </div>
                )}
            </div>

            <h1>{questionnaire.title}</h1>
            <SkjemautfyllerContainer
                authorized
                blockSubmit={false}
                onCancel={() => {
                    /* ikke implementert enda */
                }}
                onSave={(questionnaireResponse) => {
                    setResponseJson(questionnaireResponse);
                }}
                sticky={false}
                onSubmit={() => {
                    /* ikke implementert enda */
                }}
                resources={resources}
                loginButton={<button />}
                onRequestHelpButton={(_item, _helpItem, _helpType, _helpText, opening) => {
                    return (
                        <button
                            type="button"
                            title={resources ? resources.helpButtonTooltip : undefined}
                            className="atom_inline-functionbutton"
                            aria-expanded={opening}
                        />
                    );
                }}
                onRequestHelpElement={(_item, _helpItem, _helpType, helpText, opening) => {
                    const collapseClasses = classNames({
                        page_skjemautfyller__helpComponent: true,
                        'page_skjemautfyller__helpComponent--open': opening,
                    });
                    return (
                        <Collapse isOpened={opening}>
                            <div className={collapseClasses} dangerouslySetInnerHTML={{ __html: helpText }} />
                        </Collapse>
                    );
                }}
                questionnaire={questionnaire}
                fetchReceivers={(successCallback) => {
                    successCallback(getReceiverComponentTestData(props.selectedReceiverEndpoint));
                }}
            />
        </div>
    );
};

export default Container;
